export const takeNewDesc = (desc: string): string => {
  return desc.length > 30 ? desc.substring(0, 27) + '...' : desc;
};
