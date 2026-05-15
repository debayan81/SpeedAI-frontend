import React, { useState } from 'react'
import { Heart, Sparkles } from 'lucide-react'
import { dummyPublishedCreationData, dummyCreationData } from '../assets/assets'

const Community = () => {
    const [likedPosts, setLikedPosts] = useState([])

    const toggleLike = (id) => {
        setLikedPosts(prev =>
            prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]
        )
    }

    // Combine image creations and text creations for display
    const imageCreations = dummyPublishedCreationData.filter(c => c.type === 'image')
    const textCreations = dummyCreationData.filter(c => c.type === 'article' || c.type === 'blog-title')

    return (
        <div>
            <div className='mb-8'>
                <h1 className='text-2xl font-semibold text-slate-800 flex items-center gap-2'>
                    <Sparkles className='w-6 h-6 text-primary' />
                    Community Creations
                </h1>
                <p className='text-sm text-gray-500 mt-1'>
                    Explore what others have created with SpeedAI
                </p>
            </div>

            {/* Image Gallery */}
            <h2 className='text-lg font-semibold text-slate-700 mb-4'>🎨 AI Generated Images</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10'>
                {imageCreations.map((creation) => (
                    <div key={creation.id} className='bg-white rounded-xl border border-gray-100 
                    overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group'>
                        {/* Image */}
                        <div className='aspect-square overflow-hidden'>
                            <img
                                src={creation.content}
                                alt={creation.prompt}
                                className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
                            />
                        </div>

                        {/* Info */}
                        <div className='p-4'>
                            <p className='text-sm text-gray-600 line-clamp-2 leading-relaxed'>
                                {creation.prompt}
                            </p>
                            <div className='flex items-center justify-between mt-3'>
                                <span className='text-xs text-gray-400'>
                                    {new Date(creation.created_at).toLocaleDateString('en-US', {
                                        month: 'short', day: 'numeric', year: 'numeric'
                                    })}
                                </span>
                                <button
                                    onClick={() => toggleLike(creation.id)}
                                    className='flex items-center gap-1.5 text-sm cursor-pointer 
                                    hover:scale-105 active:scale-95 transition-transform'
                                >
                                    <Heart
                                        className={`w-4 h-4 transition-colors ${likedPosts.includes(creation.id)
                                            ? 'fill-red-500 text-red-500'
                                            : 'text-gray-400'
                                            }`}
                                    />
                                    <span className='text-gray-500 text-xs'>
                                        {creation.likes.length + (likedPosts.includes(creation.id) ? 1 : 0)}
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Text Creations */}
            <h2 className='text-lg font-semibold text-slate-700 mb-4'>📝 Articles & Blog Titles</h2>
            <div className='space-y-3 max-w-4xl'>
                {textCreations.map((creation) => (
                    <div key={creation.id} className='bg-white rounded-xl border border-gray-100 
                    px-6 py-4 hover:shadow-sm transition-all duration-200'>
                        <div className='flex items-start justify-between gap-4'>
                            <div className='flex-1 min-w-0'>
                                <p className='font-medium text-slate-700 text-sm'>
                                    {creation.prompt.length > 80
                                        ? creation.prompt.substring(0, 80) + '...'
                                        : creation.prompt}
                                </p>
                                <p className='text-gray-500 text-xs mt-2 line-clamp-2'>
                                    {creation.content.substring(0, 150)}...
                                </p>
                                <p className='text-xs text-gray-400 mt-2'>
                                    {new Date(creation.created_at).toLocaleDateString('en-US', {
                                        month: 'short', day: 'numeric', year: 'numeric'
                                    })}
                                </p>
                            </div>
                            <span className='text-xs font-medium px-4 py-1.5 rounded-full border 
                            border-primary/20 text-primary bg-primary/5 flex-shrink-0'>
                                {creation.type}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Community