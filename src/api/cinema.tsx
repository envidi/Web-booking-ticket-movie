
// import { , FormCinemaAdd } from '@/admin/types/cinema'

import instance from './config'


//get detail cinema 2
export const getOneCinema = async (id: string) => {
  const result = await instance.get('/cinema/' + id)
  return result.data.data
}
// admin
export const getAllCinema = async () => {
  const result = await instance.get('/cinema')
  return result.data.data.docs
}

