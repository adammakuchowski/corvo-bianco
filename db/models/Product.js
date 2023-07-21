import mongoose from 'mongoose'

const ProductSchema = new mongoose.Schema({
  id: String,
  name: String,
  brand: String,
  quality: Number,
  category: String,
  typ: String,
  color: String,
  productionYear: String,
  countryOfOrigin: String,
  img: Buffer,
  price: Number,
})

export default mongoose.model('ProductModel', ProductSchema)

