import * as XLSX from "xlsx";

export interface Project {
  LANGUAGE: string;
  TITLE: string;
  SHORT_DESCRIPTION: string;
  SCOPE: string;
  CATEGORIES: string;
  INFO_LINKS: string;
  GITHUB_LINK: string;
  IMAGES: string;
}

export const loadProjects = async (): Promise<Project[]> => {
  const filePath = "/src/assets/Portfolio Projects.xlsx";
  const response = await fetch(filePath);
  const arrayBuffer = await response.arrayBuffer();
  const workbook = XLSX.read(arrayBuffer, { type: "array" });
  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];
  const data: Project[] = XLSX.utils.sheet_to_json(worksheet, { raw: true });
  return data;
};
