import * as XLSX from "xlsx";

export interface Project {
  ORDER: number;
  LANGUAGE: string;
  TITLE: string;
  SHORT_DESCRIPTION: string;
  FULL_DESCRIPTION: string;
  SCOPE: string;
  CATEGORIES: string;
  INFO_LINKS: string;
  GITHUB_LINK: string;
  IMAGES: string;
}

const asText = (value: unknown) => (value == null ? "" : String(value).trim());

const asOrder = (value: unknown) => {
  const text = asText(value);
  const order = Number(text);

  return text && Number.isFinite(order) ? order : Number.MAX_SAFE_INTEGER;
};

export const loadProjects = async (): Promise<Project[]> => {
  const response = await fetch("/Portfolio Projects.xlsx");
  const arrayBuffer = await response.arrayBuffer();
  const workbook = XLSX.read(arrayBuffer, { type: "array" });
  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];
  const rows = XLSX.utils.sheet_to_json<Record<string, unknown>>(worksheet, {
    raw: false,
    defval: "",
  });

  return rows
    .map((row) => ({
      ORDER: asOrder(row.ORDER),
      LANGUAGE: asText(row.LANGUAGE),
      TITLE: asText(row.TITLE),
      SHORT_DESCRIPTION: asText(row.SHORT_DESCRIPTION),
      FULL_DESCRIPTION: asText(row.FULL_DESCRIPTION),
      SCOPE: asText(row.SCOPE),
      CATEGORIES: asText(row.CATEGORIES),
      INFO_LINKS: asText(row.INFO_LINKS),
      GITHUB_LINK: asText(row.GITHUB_LINK),
      IMAGES: asText(row.IMAGES),
    }))
    .filter((project) => project.TITLE.length > 0)
    .sort((a, b) => b.ORDER - a.ORDER);
};
