import { handleGuideLeadPost } from "@/lib/houseGrokCrm";

export async function POST(request: Request) {
  return handleGuideLeadPost(request);
}
