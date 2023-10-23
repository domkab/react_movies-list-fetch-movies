import React from 'react';
import cn from 'classnames';
import './FindMovie.scss';
// import { Movie } from '../../types/Movie';

interface FindMovieProps {
  onSearch: (term: string) => void;
  onFind: () => void;
  isError: boolean;
  // onAdd: (movie: Movie) => void;
}

export const FindMovie: React.FC<FindMovieProps> = (
  {
    onSearch,
    onFind,
    isError,
    // onAdd,
  },
) => {
  return (
    <>
      <form className="find-movie">
        <div className="field">
          <label className="label" htmlFor="movie-title">
            Movie title
          </label>

          <div className="control">
            <input
              data-cy="titleField"
              type="text"
              id="movie-title"
              placeholder="Enter a title to search"
              className={cn('input', { 'is-danger': isError })}
              onChange={(e) => onSearch(e.target.value)}
            />
          </div>

          {isError && (
            <p className="help is-danger" data-cy="errorMessage">
              Can&apos;t find a movie with such a title
            </p>
          )}

        </div>

        <div className="field is-grouped">
          <div className="control">
            <button
              data-cy="searchButton"
              type="button"
              className="button is-light"
              onClick={onFind}
            >
              Find a movie
            </button>
          </div>

          <div className="control">
            <button
              data-cy="addButton"
              type="button"
              className="button is-primary"
            >
              Add to the list
            </button>
          </div>
        </div>
      </form>

      <div className="container" data-cy="previewContainer">
        <h2 className="title">Preview</h2>
        {/* <MovieCard movie={movie} /> */}
      </div>
    </>
  );
};
