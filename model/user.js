import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

// how our model looks like
const userSchema = mongoose.Schema({
    name: String,
    salary: String,
    designation:String
});

autoIncrement.initialize(mongoose.connection);
userSchema.plugin(autoIncrement.plugin, 'payrol');

const postUser = mongoose.model('payrol', userSchema);

export default postUser;