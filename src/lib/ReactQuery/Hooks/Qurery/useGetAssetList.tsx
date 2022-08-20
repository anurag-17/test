import { useState } from "react"
import { useQuery } from "react-query";
import { ASSET_LIST_KEY } from "../../../Config/constants";
import getAllFacilityTypes from "../../Services/Query/getAllFacilityTypes";



const useGetAssetList = () => {
  const [assetList, setAssetList] = useState([]);
  console.log(assetList)
  const [assetError, setAssetError] = useState("");
  
  const {isLoading: loadingAssets} = useQuery(
    ASSET_LIST_KEY,
    getAllFacilityTypes,
    {
      onSuccess: (data) => {
      let assets = data?.data
      let items:any = []
       assets.map((asset:any)=>(
          items.push(asset?.equipmentType)
       ))
       setAssetList(items);
      },
      onError: (error: any) => {
        setAssetError(error.message)
      },
    }

  );
  return {
    assetList,
    assetError,
    loadingAssets,
  }
    
  
}

export default useGetAssetList;

