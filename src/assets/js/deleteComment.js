import axios from "axios";

const deleteBTN = document.getElementById("deleteBTN");
const commentNumber = document.getElementById("jsCommentNumber");

const decreaseCommentNumber = () => {
  commentNumber.innerHTML = parseInt(commentNumber.innerHTML, 10) - 1;
};

const removeElement = commentLi => {
  commentLi.remove();
  decreaseCommentNumber();
};

const deleteComment = async (commentLi, commentId) => {
  const videoId = window.location.href.split("/videos/")[1];
  const response = await axios({
    url: `/api/${videoId}/comment/${commentId}`,
    method: "DELETE",
    data: {
      commentId
    }
  });
  if (response.status === 200) {
    removeElement(commentLi);
  }
};

function handleDelete(e) {
  e.preventDefault();
  const commentLi = e.target.parentElement;
  const commentId = commentLi.getAttribute("comment_id");
  deleteComment(commentLi, commentId);
}

function init() {
  deleteBTN.addEventListener("click", handleDelete);
}

if (deleteBTN) {
  init();
}
