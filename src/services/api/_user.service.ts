// import { constant } from "@/constants/Constant";
import { HTTPBaseService } from '@/services/api/_base.service'

export class UserProfileService extends HTTPBaseService {
  private static classInstance?: UserProfileService

  constructor(token: string) {
    super('https://domain.example.com/api', token)
  }

  public static getInstance(token: string) {
    if (!this.classInstance) {
      this.classInstance = new UserProfileService(token)
    }

    return this.classInstance
  }

  public userBusinessTerritoryData = () =>
    this.instance.get('/BusinessData/InTerritory').then((response) => {
      if (response) {
        return response.data.entity[0]
      }
    })
}
