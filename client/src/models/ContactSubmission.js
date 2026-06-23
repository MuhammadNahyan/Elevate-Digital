// import mongoose from "mongoose";

// const ContactSubmissionSchema = new mongoose.Schema(
//   {
//     name: String,
//     email: String,
//     message: String,
//   },
//   { timestamps: true }
// );

// export default mongoose.models.ContactSubmission ||
//   mongoose.model("Message", ContactSubmissionSchema);

import mongoose from "mongoose";

const ContactSubmissionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

const ContactSubmission =
  mongoose.models.ContactSubmission ||
  mongoose.model("ContactSubmission", ContactSubmissionSchema);

export default ContactSubmission;