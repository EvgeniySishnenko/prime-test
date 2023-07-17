import { NextResponse } from "next/server";
import tradeConditions from "./trade-conditions-v2.json";

export const GET = async () => {
  return NextResponse.json(tradeConditions);
};
