import { Injectable, NestInterceptor, ExecutionContext, CallHandler, Logger } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

/**
 * Logger that tells your request and how long it took
 */
@Injectable()
export class LoggerInterceptor implements NestInterceptor {
    intercept(
        context: ExecutionContext,
        next: CallHandler,
    ): Observable<any> {
        const req = context.switchToHttp().getRequest();
        const method = req.method;
        const url = req.url;
        const now = Date.now();

        return next
            .handle()
            .pipe(
                tap(() => Logger.log(
                    `${method} ${url} ${Date.now() - now}ms`,
                    context.getClass().name,
                ))
            );
    }
}