import instance from './config'

export interface QueryMovie {
  status: string
  order: string
  country: string
  rate: string
  age: string
}

export const getOneMovie = async (id: string) => {
  const result = await instance.get('/movie/' + id)
  return result.data.data
}
export const getAllMovieHome = async () => {
  const result = await instance.get('/movie/home')
  return result.data.data.docs
}
export const getMovieStatus = async (query: QueryMovie) => {
  let result
  if (query.status == '') {
    result = await instance.get(
      `/movie/sta?_order=${query.order}&_country=${query.country}&_rate=${query.rate}&_age=${query.age}`
    )
    return result.data.data.docs
  } else {
    result = await instance.get(
      `/movie/sta?status=${query.status}&_order=${query.order}&_country=${query.country}&_rate=${query.rate}&_age=${query.age}`
    )
    return result.data.data.docs
  }
}
// export const getAllMovie = async () => {
//   const result = await instance.get('/movie')
//   return result.data.data.docs
// }
export const getAllHasShow = async (_cate: string) => {
  const result = await instance.get('/movie/showtime?_cate=' + _cate)
  return result.data.data.docs
}
export const searchMovie = async (search: string) => {
  try {
    const result = await instance.get('/movie/search?q=' + search)
    return result.data.data.docs
  } catch (error) {
    return error
  }
}
export const getRelateMovie = async (id: string) => {
  const result = await instance.get('/movie/movieByCate/' + id)
  return result.data.data
}

// admin
// get all m
export const getAllMovie = async () => {
  const result = await instance.get('/movie')
  return result.data.data.docs
}

export const getCountMovie = async () => {
  const result = await instance.get('/movie/count')
  return result.data.data
}

