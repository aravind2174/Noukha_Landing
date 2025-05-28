<div className="w-full lg:w-1/2 lg:pl-12">
  <div className="bg-white rounded-xl shadow-xl overflow-hidden relative group">
    <div className="aspect-w-16 aspect-h-9 bg-gray-200 w-full">
      {isVideoOpen ? (
        <iframe
          src="https://www.youtube.com/embed/5kDYtWjIfOQ"
          className="w-full h-full rounded-xl"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title="Noukha RMS Demo"
        ></iframe>
      ) : (
        <div
          className="relative cursor-pointer w-full h-full"
          onClick={() => setIsVideoOpen(true)}
        >
          <img
            src="https://images.pexels.com/photos/12935088/pexels-photo-12935088.jpeg"
            alt="Restaurant Technology"
            className="object-cover w-full h-full transition-opacity duration-300 group-hover:opacity-80"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <PlayCircle className="h-16 w-16 text-white bg-black bg-opacity-50 rounded-full p-2 hover:scale-105 transition-transform" />
          </div>
        </div>
      )}
    </div>
    <div className="p-4 bg-white">
      <p className="text-sm text-center text-gray-500">
        See how Noukha RMS transforms restaurant operations
      </p>
    </div>
  </div>
</div>
