import mongoose from "mongoose";

const ContentSchema = new mongoose.Schema({
  about: Object,
  services: Array,
  projects: Array,
  contact: Object,
});

export default mongoose.models.Content ||
  mongoose.model("Content", ContentSchema);