using QuestionAndAnswer.Models.Entities;
using QuestionAndAnswer.Services;
using Repository.Pattern.UnitOfWork;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace QuestionAndAnswer.Controllers
{
    public class QuestionController : Controller
    {
        private readonly IUnitOfWorkAsync _unitOfWorkAsync;

        public QuestionController(IUnitOfWorkAsync unitOfWorkAsync)
        {
            _unitOfWorkAsync = unitOfWorkAsync;
        }

        // GET: Question
        public JsonResult GetQuestions()
        {
            var questions= _unitOfWorkAsync.Repository<Question>().Query().Include(q=> q.Answers).Select();
            var groupByValue = questions.GroupBy(q => q.QuestionValue);
            var categories= questions.GroupBy(q => q.QuestionCategory).Select(q=>q.Key);
            JsonResult result = Json(new { data = groupByValue, categories = categories });
            result.JsonRequestBehavior = JsonRequestBehavior.AllowGet;

            return result;
        }
    }
}