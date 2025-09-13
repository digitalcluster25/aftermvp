import { SpravochnikItem } from "@/types/spravochnik";

const DIRECTUS_URL =
  process.env.DIRECTUS_URL || "https://directus-production-3727.up.railway.app";
const DIRECTUS_TOKEN =
  process.env.DIRECTUS_TOKEN || "3VrAInP_vNptID_m9dfGy7TfgNvMBgTB";

export async function getSpravochnikItems(): Promise<SpravochnikItem[]> {
  try {
    const response = await fetch(`${DIRECTUS_URL}/items/spravochnik`, {
      headers: {
        Authorization: `Bearer ${DIRECTUS_TOKEN}`,
        "Content-Type": "application/json",
      },
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.data || [];
  } catch (error) {
    console.error("Error fetching spravochnik items:", error);
    return [];
  }
}

export async function getSpravochnikItem(
  id: number,
): Promise<SpravochnikItem | null> {
  try {
    const response = await fetch(`${DIRECTUS_URL}/items/spravochnik/${id}`, {
      headers: {
        Authorization: `Bearer ${DIRECTUS_TOKEN}`,
        "Content-Type": "application/json",
      },
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.data || null;
  } catch (error) {
    console.error("Error fetching spravochnik item:", error);
    return null;
  }
}
