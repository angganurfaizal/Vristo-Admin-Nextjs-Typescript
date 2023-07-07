import Link from 'next/link';
import { useEffect, useState } from 'react';
import Lightbox from 'react-18-image-lightbox';
import 'react-18-image-lightbox/style.css';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../store/themeConfigSlice';

const getItems = [
    {
        id: '1',
        src: '/assets/images/lightbox1.jpg',
        title: 'This is dummy caption. It has been placed here solely to demonstrate the look and feel of finished, typeset text.',
        description: 'Photo: Samuel Rohl',
    },
    {
        id: '2',
        src: '/assets/images/lightbox2.jpeg',
        title: 'This is dummy caption. It has been placed here solely to demonstrate the look and feel of finished, typeset text.',
        description: 'Photo: Samuel Rohl',
    },
    {
        id: '3',
        src: '/assets/images/lightbox3.jpeg',
        title: "Dummy caption. It's Greek to you. Unless, of course, you're Greek, in which case, it really makes no sense.",
        description: 'Photo: Michael Hull',
    },
    {
        id: '4',
        src: '/assets/images/lightbox4.jpeg',
        title: 'This is dummy caption.',
        description: 'Photo: Folkert Gorter',
    },
    {
        id: '5',
        src: '/assets/images/lightbox5.jpeg',
        title: "It's a dummy caption. He who searches for meaning here will be sorely disappointed.",
        description: 'Photo: Thomas Lefebvre',
    },
    {
        id: '6',
        src: '/assets/images/lightbox6.jpeg',
        title: "It's a dummy caption. He who searches for meaning here will be sorely disappointed.",
        description: 'Photo: Thomas Lefebvre',
    },
];

const LightBox = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('LightBox'));
    });
    const [value, setValue] = useState<any>('all controls');
    const [isOpen, setIsOpen] = useState<any>(false);
    const [photoIndex, setPhotoIndex] = useState<any>(0);

    const handleChange = (e: any) => setValue(e.target.value);
    const [tabs] = useState<string>('All controls');
    const [tabs1] = useState<string>('All controls');

    return (
        <div>
            <ul className="flex space-x-2 rtl:space-x-reverse">
                <li>
                    <Link href="#" className="text-primary hover:underline">
                        Components
                    </Link>
                </li>
                <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                    <span>Lightbox</span>
                </li>
            </ul>
            <div className="space-y-8 pt-5" x-data="lightbox">
                <div className="panel flex items-center overflow-x-auto whitespace-nowrap p-3 text-primary">
                    <div className="rounded-full bg-primary p-1.5 text-white ring-2 ring-primary/30 ltr:mr-3 rtl:ml-3">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M19.0001 9.7041V9C19.0001 5.13401 15.8661 2 12.0001 2C8.13407 2 5.00006 5.13401 5.00006 9V9.7041C5.00006 10.5491 4.74995 11.3752 4.28123 12.0783L3.13263 13.8012C2.08349 15.3749 2.88442 17.5139 4.70913 18.0116C9.48258 19.3134 14.5175 19.3134 19.291 18.0116C21.1157 17.5139 21.9166 15.3749 20.8675 13.8012L19.7189 12.0783C19.2502 11.3752 19.0001 10.5491 19.0001 9.7041Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                            />
                            <path opacity="0.5" d="M7.5 19C8.15503 20.7478 9.92246 22 12 22C14.0775 22 15.845 20.7478 16.5 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                    </div>
                    <span className="ltr:mr-3 rtl:ml-3">Documentation: </span>
                    <a href="https://www.npmjs.com/package/react-image-lightbox" target="_blank" className="block hover:underline" rel="noreferrer">
                        https://www.npmjs.com/package/react-image-lightbox
                    </a>
                </div>

                {/* Lightbox */}
                <div className="panel">
                    <h5 className="mb-5 text-lg font-semibold dark:text-white-light">Lightbox</h5>
                    <div className="mb-5">
                        <div className="mb-5 flex">
                            <div className="ltr:mr-4 rtl:ml-4">
                                <input type="radio" value="all controls" onChange={handleChange} name="allcontrols" className="form-radio mt-1.5" checked={value === 'all controls'} />
                            </div>
                            <div className="flex-1">
                                <h4 className="text-lg font-semibold text-primary">All controls</h4>
                                <p className="media-text">Caption, slideshow, thumbnails and fullscreen buttons, tap to toggle controls</p>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="ltr:mr-4 rtl:ml-4">
                                <input type="radio" value="minimal" onChange={handleChange} name="allcontrols" className="form-radio mt-1.5" checked={value === 'minimal'} />
                            </div>
                            <div className="flex-1">
                                <h4 className="text-lg font-semibold text-primary">Minimal</h4>
                                <p className="media-text">No caption, no slideshow, no thumbnails, no fullscreen, tap to close</p>
                            </div>
                        </div>
                        {value === 'all controls' ? (
                            <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
                                {tabs === 'All controls' && (
                                    <>
                                        {getItems.map((item, index) => {
                                            return (
                                                <Link
                                                    href="#"
                                                    key={item.id}
                                                    className={`${index === 3 ? 'md:col-span-2 md:row-span-2' : ''}`}
                                                    onClick={() => {
                                                        setIsOpen(true);
                                                        setPhotoIndex(index);
                                                    }}
                                                >
                                                    <img src={item.src} alt="gallery" data-fancybox="gallery" className="h-full w-full rounded-md object-cover" data-caption={item.title} />
                                                </Link>
                                            );
                                        })}
                                    </>
                                )}

                                {isOpen && (
                                    <Lightbox
                                        mainSrc={`${getItems[photoIndex]?.src}`}
                                        nextSrc={`${getItems[photoIndex + (1 % getItems.length)]?.src}`}
                                        prevSrc={getItems[(photoIndex + getItems.length - 1) % getItems.length]?.src}
                                        onCloseRequest={() => setIsOpen(false)}
                                        onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % getItems.length)}
                                        onMovePrevRequest={() => setPhotoIndex((photoIndex + getItems.length - 1) % getItems.length)}
                                        imageTitle={getItems[photoIndex]?.title}
                                        imageCaption={getItems[photoIndex]?.description}
                                        animationDuration={300}
                                        keyRepeatLimit={180}
                                    />
                                )}
                            </div>
                        ) : (
                            <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
                                {tabs1 === 'All controls' && (
                                    <>
                                        {getItems.map((item, index) => {
                                            return (
                                                <Link
                                                    href="#"
                                                    key={item.id}
                                                    className={`${index === 3 ? 'md:col-span-2 md:row-span-2' : ''}`}
                                                    onClick={() => {
                                                        setIsOpen(true);
                                                        setPhotoIndex(index);
                                                    }}
                                                >
                                                    <img src={item.src} alt="gallery" data-fancybox="gallery" className="h-full w-full rounded-md object-cover" data-caption={item.title} />
                                                </Link>
                                            );
                                        })}
                                    </>
                                )}
                                {isOpen && (
                                    <Lightbox
                                        mainSrc={`${getItems[photoIndex]?.src}`}
                                        nextSrc={`${getItems[photoIndex + (1 % getItems.length)]?.src}`}
                                        prevSrc={getItems[(photoIndex + getItems.length - 1) % getItems.length]?.src}
                                        onCloseRequest={() => setIsOpen(false)}
                                        onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % getItems.length)}
                                        onMovePrevRequest={() => setPhotoIndex((photoIndex + getItems.length - 1) % getItems.length)}
                                        enableZoom={false}
                                    />
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LightBox;
