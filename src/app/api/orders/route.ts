import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { Order, OrderItem } from '@/types';

export async function GET() {
  try {
    const orders = db.getOrders();
    return NextResponse.json(orders);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch orders' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { customer_name, customer_email, customer_phone, delivery_address, total_amount, order_items } = body;
    
    const order: Order = {
      id: 0, // Will be auto-generated
      customer_name,
      customer_email,
      customer_phone,
      delivery_address,
      total_amount,
      status: 'pending',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };
    
    const orderResult = db.saveOrder(order);
    const orderId = orderResult.id;
    
    for (const item of order_items) {
      const orderItem: OrderItem = {
        id: 0, // Will be auto-generated
        order_id: orderId,
        flower_id: item.flower_id,
        quantity: item.quantity,
        price_at_purchase: item.price,
        created_at: new Date().toISOString()
      };
      db.saveOrderItem(orderItem);
    }
    
    return NextResponse.json(orderResult, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create order' }, { status: 500 });
  }
}
