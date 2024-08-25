﻿using System.ComponentModel.DataAnnotations;

namespace AppointmentProject.Models.ViewModels
{
    public class ForgotPasswordViewModel
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; }
    }
}
