// Mobile Navigation Toggle
document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle")
  const navMenu = document.querySelector(".nav-menu")
  const navLinks = document.querySelectorAll(".nav-link")

  // Toggle mobile menu
  navToggle.addEventListener("click", () => {
    const isExpanded = navToggle.getAttribute("aria-expanded") === "true"

    navToggle.setAttribute("aria-expanded", !isExpanded)
    navToggle.setAttribute("aria-label", isExpanded ? "メニューを開く" : "メニューを閉じる")
    navMenu.classList.toggle("active")

    // Animate hamburger icon
    const spans = navToggle.querySelectorAll("span")
    if (!isExpanded) {
      spans[0].style.transform = "rotate(45deg) translate(5px, 5px)"
      spans[1].style.opacity = "0"
      spans[2].style.transform = "rotate(-45deg) translate(7px, -6px)"
    } else {
      spans[0].style.transform = "none"
      spans[1].style.opacity = "1"
      spans[2].style.transform = "none"
    }
  })

  // Close mobile menu when clicking on nav links
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active")
      navToggle.setAttribute("aria-expanded", "false")
      navToggle.setAttribute("aria-label", "メニューを開く")

      const spans = navToggle.querySelectorAll("span")
      spans[0].style.transform = "none"
      spans[1].style.opacity = "1"
      spans[2].style.transform = "none"
    })
  })

  // FAQ Accordion
  const faqQuestions = document.querySelectorAll(".faq-question")

  faqQuestions.forEach((question) => {
    question.addEventListener("click", function () {
      const isExpanded = this.getAttribute("aria-expanded") === "true"
      const answer = this.nextElementSibling

      // Close all other FAQ items
      faqQuestions.forEach((otherQuestion) => {
        if (otherQuestion !== this) {
          otherQuestion.setAttribute("aria-expanded", "false")
          otherQuestion.nextElementSibling.classList.remove("active")
        }
      })

      // Toggle current FAQ item
      this.setAttribute("aria-expanded", !isExpanded)
      answer.classList.toggle("active")
    })

    // Keyboard support for FAQ
    question.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault()
        this.click()
      }
    })
  })

  // Smooth scrolling for anchor links (fallback for older browsers)
  const anchorLinks = document.querySelectorAll('a[href^="#"]')

  anchorLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href")
      const targetElement = document.querySelector(targetId)

      if (targetElement) {
        e.preventDefault()

        const headerHeight = document.querySelector(".header").offsetHeight
        const targetPosition = targetElement.offsetTop - headerHeight

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        })
      }
    })
  })

  // Add scroll effect to header
  let lastScrollTop = 0
  const header = document.querySelector(".header")

  window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop

    if (scrollTop > lastScrollTop && scrollTop > 100) {
      // Scrolling down
      header.style.transform = "translateY(-100%)"
    } else {
      // Scrolling up
      header.style.transform = "translateY(0)"
    }

    lastScrollTop = scrollTop
  })
})
