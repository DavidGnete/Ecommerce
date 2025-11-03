import { NextRequest } from "next/server";
import { MongoConection } from "@/app/conection/mongo";
import Store from "@/app/models/model";

export async function GET() {
  await MongoConection();
  try {
    const inventory = await Store.find();
    return Response.json({ success: true, data: inventory }, { status: 200 });
  } catch (error: unknown) {
    return Response.json(
      { success: false, message: `Problem in method GET: ${error}` },
      { status: 500 }
    );
  }
}

export async function PUT(req: NextRequest, context: { params: Promise<{ id: string }> }) {
  await MongoConection();

  try {
    const { id } = await context.params; // 👈 ahora params es una Promise
    const body = await req.json();
    const update = await Store.findByIdAndUpdate(id, body, { new: true });

    if (!update) {
      return Response.json({ success: false, message: "Product not found" }, { status: 404 });
    }

    return Response.json({ success: true, data: update });
  } catch (error: unknown) {
    return Response.json(
      { success: false, message: `There is a problem with PUT: ${error}` },
      { status: 400 }
    );
  }
}

export async function DELETE(req: NextRequest, context: { params: Promise<{ id: string }> }) {
  await MongoConection();

  try {
    const { id } = await context.params;
    const deleted = await Store.findByIdAndDelete(id);

    if (!deleted) {
      return Response.json({ success: false, message: "Product not found" }, { status: 404 });
    }

    return Response.json({ success: true, message: "Product deleted successfully" }, { status: 200 });
  } catch (error: unknown) {
    return Response.json(
      { success: false, message: `There is a problem with DELETE: ${error}` },
      { status: 400 }
    );
  }
}
