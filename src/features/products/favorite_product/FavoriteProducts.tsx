import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import SidePanel from '@/components/common/side_panel/SidePanel'
import {FavoriteProductsContainer, FavoriteProductsContentContainer} from './FavoriteProductsStyled'
import {clearFavorite, getFavoriteProducts, updateFavoriteProducts} from '../productsSlice'
import FavoriteProductEntry from './favorite_product_entry/FavoriteProductEntry'

interface FavoriteProductsProps {
  favoriteIsOpen: boolean;
  setFavoriteIsOpen: (value: boolean) => void;
}

const FavoriteProducts = ({favoriteIsOpen, setFavoriteIsOpen}: FavoriteProductsProps): JSX.Element | null => {
  const favoriteProducts = useSelector(getFavoriteProducts)
  const [isTrashDisabled, setIsTrashDisabled] = useState<boolean>(false)
  const [favoriteTotal, setFavoriteTotal] = useState<number>()
  const dispatch = useDispatch()

  useEffect(() => {
    const localStorageFavoriteProducts = localStorage.getItem('favoriteProducts')
    const storageFavoriteProducts = localStorageFavoriteProducts ? JSON.parse(localStorageFavoriteProducts) : []

    dispatch(updateFavoriteProducts(storageFavoriteProducts))
  }, [dispatch])

  useEffect(() => {
    if (!favoriteProducts.length) {
      setIsTrashDisabled(true)

      return
    }

    localStorage.setItem('favoriteProducts', JSON.stringify(favoriteProducts))
    setIsTrashDisabled(false)
    setFavoriteTotal(favoriteProducts.length)
  }, [favoriteProducts])

  const onCloseModal = () => setFavoriteIsOpen(false)

  const onClearFavorite = () => {
    dispatch(clearFavorite())
    localStorage.setItem('favoriteProducts', JSON.stringify([]))
  }

  if (!favoriteIsOpen) return null

  return (
    <SidePanel
      sidePanelIsOpen={favoriteIsOpen}
      setIsSidePanelOpen={setFavoriteIsOpen}
      onClear={onClearFavorite}
      isTrashDisabled={isTrashDisabled}
      onCloseModal={onCloseModal}
      headerName='FAVORITE'
    >
      <FavoriteProductsContainer>
        <FavoriteProductsContentContainer>
          {favoriteProducts.map((product, index) => (
            <FavoriteProductEntry key={index} favoriteProduct={product} />
          ))}
        </FavoriteProductsContentContainer>
      </FavoriteProductsContainer>
    </SidePanel>
  )
}

export default FavoriteProducts
