

export const createImage = (url: string) => {
  return new Promise((resolve, reject) => {
    const image = new Image()
    image.addEventListener('load', () => resolve(image))
    image.addEventListener('error', () => reject(Error))
    image.setAttribute('crossOrigin', 'anonymous')
    image.src = url
  })
}


export const getRadianAngle = (angle: number) => {
  return angle * (Math.PI / 180)
}

export const rotateSize =(width: number, height: number, angle: number) => {
  const radianAngle = getRadianAngle(angle)
  const sin = Math.sin(radianAngle)
  const cos = Math.cos(radianAngle)
  const newWidth = Math.floor(width * cos + height * sin)
  const newHeight = Math.floor(height * cos + width * sin)
  return { newWidth, newHeight }
}

/**
 * Returns the new bounding area of a rotated rectangle.
 */
// export function rotateSize(width, height, rotation) {
//   const rotRad = getRadianAngle(rotation)

//   return {
//     width:
//       Math.abs(Math.cos(rotRad) * width) + Math.abs(Math.sin(rotRad) * height),
//     height:
//       Math.abs(Math.sin(rotRad) * width) + Math.abs(Math.cos(rotRad) * height),
//   }
// }

/**
 * This function was adapted from the one in the ReadMe of https://github.com/DominicTobias/react-image-crop
 */


export default async function getCroppedImg(
  imageSrc: string,
  pixelCrop: any,
  rotation = 0,
  flip = { horizontal: false, vertical: false }
) {
  const image:any = await createImage(imageSrc)
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')

  if (!ctx) {
    return null
  }

  const rotRad = getRadianAngle(rotation)

  // calculate bounding box of the rotated ima
  const { width: bBoxWidth, height: bBoxHeight }:any = rotateSize(
    image?.width,
    image?.height,
    rotation
  )

  // set canvas size to match the bounding box
  canvas.width = bBoxWidth
  canvas.height = bBoxHeight

  // translate canvas context to a central location to allow rotating and flipping around the center
  ctx.translate(bBoxWidth / 2, bBoxHeight / 2)
  ctx.rotate(rotRad)
  ctx.scale(flip.horizontal ? -1 : 1, flip.vertical ? -1 : 1)
  ctx.translate(-image.width / 2, -image.height / 2)

  // draw rotated image
  ctx.drawImage(image, 0, 0)

  // croppedAreaPixels values are bounding box relative
  // extract the cropped image using these values
  const data = ctx.getImageData(
    pixelCrop.x,
    pixelCrop.y,
    pixelCrop.width,
    pixelCrop.height
  )

  // set canvas width to final desired crop size - this will clear existing context
  canvas.width = pixelCrop.width
  canvas.height = pixelCrop.height

  // paste generated rotate image at the top left corner
  ctx.putImageData(data, 0, 0)

  // As Base64 string
  // return canvas.toDataURL('image/jpeg');

  // As a blob
  return new Promise((resolve, reject) => {
    canvas.toBlob((file:any) => {
      resolve(URL.createObjectURL(file))
    }, 'image/jpeg')
  })
}

export const getFirstLetter = (str: string) => {
  const firstLetters = str
    .split(" ")
    .map((word) => word[0])
    .join("");

  return firstLetters;
};




export const getFormData = (object: any) => {
  const formData = new FormData();
  Object.keys(object).forEach((key) => {
    formData.append(key, object[key]);
  });
  return formData;
}

export const convertToArray = (obj:any) => {
  return Object.keys(obj).map(key => obj[key])
}



export const converArrayToObject = (array:any) => {
  array?.reduce((a:any, v:any) => ({ ...a, [v]: v}), {})
}

export const convertToArrayOfObject = (array:any[]) => {
  return array.reduce((object:any, value:string) => {
    object?.push({ label: value, value: value })
    return object;
  }, []);
}

// const validateName = (name: string) => {
//   const regex = /^[a-zA-Z]+$/;
//   return regex.test(name);
// }


//loop through an object and place the values in an array

// react componen

//  a funtion with input parameter is index and get the number of the list
//  a function with input parameter is index and get the number of the list
// funtion to get the number of the list with inde