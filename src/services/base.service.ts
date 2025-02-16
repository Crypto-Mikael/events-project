import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../environments/environment.development';

export abstract class BaseService {
  protected constructor(protected path: HttpClient, protected route: string) {}

  public rootApi = () => [environment.API_URL, this.route].join('');

  public exceptionHandler = async (httpErrorResponse: HttpErrorResponse) => {
    alert(
      JSON.parse(httpErrorResponse.error).message ??
        `Ops, parece que algo deu errado! Tente novamente. Caso o erro persista, entre em contato com o suporte.`
    );
    throw httpErrorResponse;
  };
}
