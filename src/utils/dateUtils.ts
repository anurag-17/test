export const convertDate = (dateToConvert:any) => {

    const date = new Date(dateToConvert).toISOString().split("T")[0]

    return date

  }