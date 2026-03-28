import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { Flower } from '@/types';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const flowers = db.getFlowers();
    const flower = flowers.find(f => f.id === parseInt(params.id));
    
    if (!flower) {
      return NextResponse.json({ error: 'Flower not found' }, { status: 404 });
    }
    return NextResponse.json(flower);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch flower' }, { status: 500 });
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    const { name, description, price, image_url, category, stock_quantity } = body;
    
    const flowers = db.getFlowers();
    const index = flowers.findIndex(f => f.id === parseInt(params.id));
    
    if (index === -1) {
      return NextResponse.json({ error: 'Flower not found' }, { status: 404 });
    }
    
    const updatedFlower: Flower = {
      ...flowers[index],
      name,
      description,
      price,
      image_url,
      category,
      stock_quantity,
      updated_at: new Date().toISOString()
    };
    
    const result = db.saveFlower(updatedFlower);
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update flower' }, { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const flowers = db.getFlowers();
    const flower = flowers.find(f => f.id === parseInt(params.id));
    
    if (!flower) {
      return NextResponse.json({ error: 'Flower not found' }, { status: 404 });
    }
    
    db.deleteFlower(parseInt(params.id));
    return NextResponse.json({ message: 'Flower deleted successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete flower' }, { status: 500 });
  }
}
