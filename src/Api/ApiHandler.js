import { axiosInstance } from "./AxiosInstance"
import { endPoints } from "./EndPoints"

export const getAllProducts = async () => {
    try {
      const { data } = await axiosInstance.get(`${endPoints.Products}`)
      return data
    } catch (error) {
      throw error
    }
  }