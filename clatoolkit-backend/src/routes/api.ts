import { NextFunction, Request, Response, Router } from "express";

import * as apiController from "../controllers/api";

import * as Auth from "../config/jwtAuth.middleware";

import * as passportConfig from "../config/passport";
class Api {
  public router: Router;
  public constructor() {
    this.router = Router();
    this.init();
  }
  private init() {
    this.router.post("/import", Auth.JwtAuthorized, apiController.getFacebook);
  }
}

const apiRoutes = new Api();
export default apiRoutes.router;
