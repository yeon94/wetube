import express from "express";
import routes from "../routes";
import {
  postRegisterView,
  postAddComment,
  deleteComments
} from "../controllers/videoController";

const apiRouter = express.Router();

apiRouter.post(routes.registerView, postRegisterView);
apiRouter.post(routes.addComment, postAddComment);
apiRouter.delete(routes.deleteComment, deleteComments);

export default apiRouter;
