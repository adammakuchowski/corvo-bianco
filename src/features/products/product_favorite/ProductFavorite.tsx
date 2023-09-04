import {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import SidePanel from '@/components/common/side_panel/SidePanel'
import {ProductFavoriteContainer} from './ProductFavoriteStyled'

interface ProductFavoriteProps {
  favoriteIsOpen: boolean;
  setFavoriteIsOpen: (value: boolean) => void;
}

const ProductFavorite = ({favoriteIsOpen, setFavoriteIsOpen}: ProductFavoriteProps): JSX.Element | null => {
  const favoriteProducts = useSelector(getFavoriteProducts)
  const [isTrashDisabled, setIsTrashDisabled] = useState<boolean>(false)
  const [favoriteTotal, setFavoriteTotal] = useState<number>(0)

  useEffect(() => {
    favoriteProducts.length ? setIsTrashDisabled(false) : setIsTrashDisabled(true)

  }, [favoriteProducts])

  const onCloseModal = () => setFavoriteIsOpen(false)

  const onClearFavorite = () => {
    dispatch(clearFavorite())
    localStorage.setItem('favoriteProducts ', JSON.stringify([]))
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
    <ProductFavoriteContainer>

    </ProductFavoriteContainer>
    </SidePanel>
  )
}

export default ProductFavorite
