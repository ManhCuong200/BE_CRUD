import express from "express";
import {
  create,
  getAll,
  getDetail,
  update,
  remove,
} from "../controllers/studentController.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Students
 *   description: Student CRUD APIs
 */

/**
 * @swagger
 * /students:
 *   get:
 *     summary: Lấy danh sách tất cả sinh viên
 *     tags: [Students]
 *     responses:
 *       200:
 *         description: Lấy danh sách student thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Student'
 *       500:
 *         description: Lỗi server
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
router.get("/", getAll);

/**
 * @swagger
 * /students/{id}:
 *   get:
 *     summary: Lấy thông tin chi tiết của 1 student
 *     tags: [Students]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Lấy thành công
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Student'
 *       404:
 *         description: Student không tồn tại
 *       500:
 *         description: Lỗi server
 */
router.get("/:id", getDetail);

/**
 * @swagger
 * /students:
 *   post:
 *     summary: Tạo mới student
 *     tags: [Students]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/NewStudent'
 *     responses:
 *       201:
 *         description: Tạo thành công
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Student'
 *       400:
 *         description: Dữ liệu không hợp lệ
 *       500:
 *         description: Lỗi server
 */
router.post("/", create);

/**
 * @swagger
 * /students/{id}:
 *   put:
 *     summary: Cập nhật thông tin student
 *     tags: [Students]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateStudent'
 *     responses:
 *       200:
 *         description: Cập nhật thành công
 *       400:
 *         description: Dữ liệu không hợp lệ
 *       404:
 *         description: Student không tồn tại
 *       500:
 *         description: Lỗi server
 */
router.put("/:id", update);

/**
 * @swagger
 * /students/{id}:
 *   delete:
 *     summary: Xóa student theo ID
 *     tags: [Students]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Xóa thành công
 *       404:
 *         description: Student không tồn tại
 *       500:
 *         description: Lỗi server
 */
router.delete("/:id", remove);

export default router;
