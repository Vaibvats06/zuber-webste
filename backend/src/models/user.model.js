import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
    name: {
    type: String,
    minlength:[3,"Name must be at least 3 characters long"],
    maxlength:[50,"Name is too large"],
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model('User', userSchema);

export default User;
