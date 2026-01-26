export const getGenderDescription = (genderCode: number | null): string => {
  if (genderCode === null) return "Sin Género";
  switch (genderCode) {
    case 1:
      return "Hombre";
    case 2:
      return "Mujer";
    default:
      return "Género Desconocido";
  }
};
