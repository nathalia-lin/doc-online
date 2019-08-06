import { Catch, HttpException, ArgumentsHost, ExceptionFilter, Logger } from '@nestjs/common';

/**
 * Catches defined errors
 * Creates an error response (Not the best response right now)
 */

@Catch(HttpException)
export class HttpErrorFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const request = ctx.getRequest();
        const response = ctx.getResponse();
        const status = exception.getStatus();

        const errorResponse = {
            code: status,
            timestamp: new Date().toLocaleDateString(),
            path: request.url,
            method: request.method,
            error: exception.message.error || null,
            message: exception.message.message || null,
        }

        Logger.error(
            `${request.method} ${request.url}`,
            JSON.stringify(errorResponse),
            'ExceptionFilter'
        );

        response.status(status).json(errorResponse);
    }
}