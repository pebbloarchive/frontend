import { NextApiRequest, NextApiResponse, NextApiHandler } from 'next';
import Sentry from './sentryInit';

export const captureException = Sentry.captureException;

export function sentryHandler(handler: NextApiHandler) {
    return async (req: NextApiRequest, res: NextApiResponse) => {
        try {
            return await handler(req, res);
        } catch(err) {
            console.error({ err });
            Sentry.captureException(err);
            await Sentry.flush(2000);
            return res.status(500).json({ err });
        }
    }
}
