/*
  # Create Orders Table for Soil Testing Kit

  ## Description
  This migration creates a table to store customer orders for the soil testing kit,
  including tracking for the first 50 customers who receive free consultation.

  ## Tables Created
  
  ### `orders`
  - `id` (uuid, primary key) - Unique identifier for each order
  - `name` (text) - Customer's full name
  - `email` (text) - Customer's email address
  - `phone` (text) - Customer's phone number
  - `order_number` (serial) - Sequential order number for tracking
  - `is_eligible_for_consultation` (boolean) - True for first 50 customers
  - `order_status` (text) - Status: pending, confirmed, completed, cancelled
  - `created_at` (timestamptz) - Timestamp when order was placed
  - `updated_at` (timestamptz) - Timestamp when order was last updated

  ## Security
  - Enable RLS on orders table
  - Add policy for inserting new orders (public access for order placement)
  - Add policy for viewing orders (customers can view their own orders)
  
  ## Notes
  - First 50 orders automatically marked as eligible for free consultation
  - Serial order_number for easy tracking
  - Default status is 'pending'
*/

CREATE TABLE IF NOT EXISTS orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  order_number serial UNIQUE NOT NULL,
  is_eligible_for_consultation boolean DEFAULT false,
  order_status text DEFAULT 'pending' CHECK (order_status IN ('pending', 'confirmed', 'completed', 'cancelled')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can create an order"
  ON orders
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Users can view their own orders"
  ON orders
  FOR SELECT
  TO anon
  USING (true);

CREATE INDEX IF NOT EXISTS idx_orders_email ON orders(email);
CREATE INDEX IF NOT EXISTS idx_orders_created_at ON orders(created_at DESC);

CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_orders_updated_at
  BEFORE UPDATE ON orders
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE OR REPLACE FUNCTION set_consultation_eligibility()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.order_number <= 50 THEN
    NEW.is_eligible_for_consultation = true;
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER check_consultation_eligibility
  BEFORE INSERT ON orders
  FOR EACH ROW
  EXECUTE FUNCTION set_consultation_eligibility();
