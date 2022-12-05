import { InjectionToken } from "@angular/core"
import { UserServiceModel } from "./users.service.model"

export const USERS_SERVICE = new InjectionToken<UserServiceModel>("users.service.model")