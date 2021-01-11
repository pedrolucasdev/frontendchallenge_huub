import { HttpHeaders, HttpParams } from "@angular/common/http";
import { environment } from "src/environments/environment";

export const HttpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": environment.baseUrl,
    "Access-Control-Allow-Headers":
      "Access-Control-Allow-Headers,Access-Control-Allow-Origin,Access-Control-Allow-Credentials,Access-Control-Allow-Methods, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers",
    "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT,DELETE,PATCH",
  }),
  params: new HttpParams()
};
