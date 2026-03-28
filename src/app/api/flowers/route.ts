import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { Flower } from '@/types';

export async function GET() {
  try {
    const flowers = db.getFlowers();
    return NextResponse.json(flowers);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch flowers' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, description, price, image_url, category, stock_quantity } = body;
    
    const flower: Flower = {
      id: 0, // Will be auto-generated
      name,
      description,
      price,
      image_url,
      category,
      stock_quantity,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };
    
    const result = db.saveFlower(flower);
    return NextResponse.json(result, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create flower' }, { status: 500 });
  }
}
