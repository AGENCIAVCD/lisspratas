import { redirect } from "next/navigation";
import { vipGroupUrl } from "@/lib/site-data";

export default function ObrigadoPage() {
  redirect(vipGroupUrl);
}
