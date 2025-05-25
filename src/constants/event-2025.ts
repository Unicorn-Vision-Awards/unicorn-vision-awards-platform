export const UVA2025eventDateStartString = "2025-07-26";
export const UVA2025eventDateEndString = "2025-07-27";
export const UVA2025eventDateStart = new Date(UVA2025eventDateStartString);
export const UVA2025eventDateEnd = new Date(UVA2025eventDateEndString);
// 26-27 July 2025
export const UVA2025eventDateFormatted = `${UVA2025eventDateStart.toLocaleDateString(
	"en-GB",
	{
		day: "numeric",
	},
)} - ${UVA2025eventDateEnd.toLocaleDateString("en-GB", {
	month: "long",
	day: "numeric",
	year: "numeric",
})}`;
