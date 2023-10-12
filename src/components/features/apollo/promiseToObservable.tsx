/**
 *  https://github.com/apollographql/apollo-link/issues/646#issuecomment-423279220
 */
import { Observable } from "@apollo/client";

export default (promise: Promise<any>) =>
  new Observable<any>((subscriber) => {
    promise.then(
      (value) => {
        if (subscriber.closed) return;
        subscriber.next(value);
        subscriber.complete();
      },
      (err) => subscriber.error(err),
    );
  });
