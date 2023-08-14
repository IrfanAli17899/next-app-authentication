import { stackMiddlewares } from "./middlewares/stackMiddleware";
import { withAuth } from "./middlewares/withAuth";
import { withHandleAuthSuccess } from "./middlewares/withHandleAuthSuccess";

const middlewares = [withAuth, withHandleAuthSuccess];
export default stackMiddlewares(middlewares);