// haconst newBtnHandler = async (event) => {
const newExerciseFormHandler = async (event) => {
    document.location.replace('/api/exercise/new');
};

// handle event to submit new exercise data
const newExerciseSubmitHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#name").value.trim();
  const duration = document.querySelector("#content").value.trim();

  if (name && duration) {
    const response = await fetch('/api/exercise', {
      method: 'POST',
      body: JSON.stringify({ name, duration }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // return to dashboard
      document.location.replace('/exercise');
    } else {
      alert("New exercise failed to create!");
    }
  }
};

// handle event to display edit current exercise record form
const editExerciseHandler = async (event) => {
  event.preventDefault();

  const id = event.target.getAttribute('data-id');

  document.location.replace(`/api/exercise/edit/${id}`);
};

// handle event to update the blog
const updateExerciseSubmitHandler = async (event) => {

  const id = event.target.getAttribute('data-id');
  const name = document.querySelector("#name").value.trim();
  const duration = document.querySelector("#content").value.trim();

  const response = await fetch(`/api/exercise/update/${id}`, {
    method: 'POST',
    body: JSON.stringify({ name, duration }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    // Refresh page to display updated blog
    document.location.replace(`/blog/${id}`);
  } else {
    alert("Exercise not found!")
  }
};

// handle event to delete current blog
const delExerciseHandler = async (event) => {

  const id = event.target.getAttribute('data-id');

  const response = await fetch(`/api/exercise/${id}`, {
    method: 'DELETE',
  });

  if (response.ok) {
    document.location.reload();
  } else {
    alert("Exercise not found!")
  }

};

// Listen to new exericse form submit event
const newExerciseForm = document.querySelector('.new-exercise-btn');

const newExerciseSubmit = document.querySelector('.new-exercise-form');

const editExercise = document.querySelectorAll('.edit-exercise-btn');

const updateExerciseSubmit = document.querySelector('.udpate-exercise-form');

const delExercise = document.querySelectorAll('.del-exercise-btn');

if (newExerciseForm) {
  newExerciseForm.addEventListener('click', newExerciseFormHandler)
}

if (newExerciseSubmit) {
  newExerciseSubmit.addEventListener('submit', newExerciseSubmitHandler);
};

if (editExercise) {
  editExercise.forEach(btn => {
    btn.addEventListener("click", editExerciseHandler);
  });
};

if (updateExerciseSubmit) {
  updateExerciseSubmit.addEventListener('submit', updateExerciseSubmitHandler);
};

if (delExercise) {
  delExercise.forEach(btn => {
    btn.addEventListener("click", delExerciseHandler);
  });
};