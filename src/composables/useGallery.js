export function useGallery(isFullPage = false) {
    const baseGalleryItems = [{
        image: '/src/assets/gallery/1.jpg',
        instagram: 'calypso.mq',
        class: 'row-span-2 aspect-[3/4]'
    }, {
        image: '/src/assets/gallery/2.jpg',
        instagram: 'calypso.mq',
        class: 'aspect-square'
    }, {
        image: '/src/assets/gallery/3.jpg',
        instagram: 'calypso.mq',
        class: 'col-span-2 aspect-[2/1]'
    }, {
        image: '/src/assets/gallery/4.jpg',
        instagram: 'calypso.mq',
        class: 'aspect-square'
    }, {
        image: '/src/assets/gallery/5.jpg',
        instagram: 'calypso.mq',
        class: 'row-span-2 aspect-[3/4]'
    }, {
        image: '/src/assets/gallery/6.jpg',
        instagram: 'calypso.mq',
        class: 'col-span-2 aspect-[2/1]'
    }]

    const extraGalleryItems = [{
        image: '/src/assets/gallery/1.jpg',
        instagram: 'calypso.mq',
        class: 'aspect-square'
    }, {
        image: '/src/assets/gallery/2.jpg',
        instagram: 'calypso.mq',
        class: 'row-span-2 col-span-2 aspect-square'
    }, {
        image: '/src/assets/gallery/3.jpg',
        instagram: 'calypso.mq',
        class: 'aspect-[3/4]'
    }, {
        image: '/src/assets/gallery/4.jpg',
        instagram: 'calypso.mq',
        class: 'col-span-2 aspect-[2/1]'
    }]

    const galleryItems = isFullPage ? [...baseGalleryItems, ...extraGalleryItems] : baseGalleryItems

    return {
        galleryItems
    }
}