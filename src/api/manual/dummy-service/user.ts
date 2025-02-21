import { dummyService } from '@/api/manual/configs/dummy-service'

const dummyUserService = {
  get() {
    return dummyService.get({ url: `/user` })
  }
}

export default dummyUserService
