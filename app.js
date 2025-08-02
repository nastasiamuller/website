particlesJS("particles-js", {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#cccccc",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 5,
      },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#cccccc",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "grab",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 140,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
});

// Modal functionality for image enlargement
function openModal() {
    console.log('openModal called');
    const modal = document.getElementById("imageModal");
    if (modal) {
        modal.style.display = "block";
        document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
        console.log('Modal opened successfully');
    } else {
        console.error('Modal element not found');
    }
}

function closeModal() {
    console.log('closeModal called');
    const modal = document.getElementById("imageModal");
    if (modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto"; // Restore scrolling
        console.log('Modal closed successfully');
    } else {
        console.error('Modal element not found');
    }
}

// Close modal when clicking outside the image
window.onclick = function(event) {
    const modal = document.getElementById("imageModal");
    if (event.target === modal) {
        closeModal();
    }
}

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// Ensure functions are available globally
window.openModal = openModal;
window.closeModal = closeModal;

// Add event listener as backup for click functionality
document.addEventListener('DOMContentLoaded', function() {
    const profilePic = document.querySelector('.profile-pic');
    if (profilePic) {
        profilePic.addEventListener('click', function() {
            console.log('Profile pic clicked via event listener');
            openModal();
        });
    } else {
        console.error('Profile pic element not found');
    }
}); 