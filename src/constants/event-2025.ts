export const UVA2025eventDateString = "2025-06-27";
export const UVA2025eventDate = new Date(UVA2025eventDateString);
export const UVA2025eventDateFormatted = UVA2025eventDate.toLocaleDateString(
	"en-GB",
	{
		month: "long",
		day: "numeric",
		year: "numeric",
	},
);
