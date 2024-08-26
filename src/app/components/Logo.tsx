import { PrismicNextImage } from "@prismicio/next";
import { createClient } from "@/prismicio";

export default async function Logo() {
  const client = createClient();
  const config = await client.getByUID("logo", "config");
  return <PrismicNextImage field={config.data.logo} className="w-10 h-10" />;
}
